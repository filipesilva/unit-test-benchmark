import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7085Component } from './my-comp-7085.component';

describe('MyComp7085Component', () => {
  let component: MyComp7085Component;
  let fixture: ComponentFixture<MyComp7085Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7085Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7085Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
