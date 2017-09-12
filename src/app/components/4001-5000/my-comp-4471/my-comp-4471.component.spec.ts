import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4471Component } from './my-comp-4471.component';

describe('MyComp4471Component', () => {
  let component: MyComp4471Component;
  let fixture: ComponentFixture<MyComp4471Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4471Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4471Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
