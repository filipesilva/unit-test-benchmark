import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4142Component } from './my-comp-4142.component';

describe('MyComp4142Component', () => {
  let component: MyComp4142Component;
  let fixture: ComponentFixture<MyComp4142Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4142Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
