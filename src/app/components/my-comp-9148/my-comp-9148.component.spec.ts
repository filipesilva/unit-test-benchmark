import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9148Component } from './my-comp-9148.component';

describe('MyComp9148Component', () => {
  let component: MyComp9148Component;
  let fixture: ComponentFixture<MyComp9148Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9148Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
