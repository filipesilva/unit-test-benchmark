import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3772Component } from './my-comp-3772.component';

describe('MyComp3772Component', () => {
  let component: MyComp3772Component;
  let fixture: ComponentFixture<MyComp3772Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3772Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3772Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
