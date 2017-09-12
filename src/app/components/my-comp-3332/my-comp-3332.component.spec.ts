import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3332Component } from './my-comp-3332.component';

describe('MyComp3332Component', () => {
  let component: MyComp3332Component;
  let fixture: ComponentFixture<MyComp3332Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3332Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3332Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
