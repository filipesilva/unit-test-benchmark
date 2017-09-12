import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3647Component } from './my-comp-3647.component';

describe('MyComp3647Component', () => {
  let component: MyComp3647Component;
  let fixture: ComponentFixture<MyComp3647Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3647Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3647Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
