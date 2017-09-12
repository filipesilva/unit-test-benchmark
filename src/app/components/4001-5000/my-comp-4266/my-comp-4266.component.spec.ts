import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4266Component } from './my-comp-4266.component';

describe('MyComp4266Component', () => {
  let component: MyComp4266Component;
  let fixture: ComponentFixture<MyComp4266Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4266Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4266Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
