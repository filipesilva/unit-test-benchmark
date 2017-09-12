import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4664Component } from './my-comp-4664.component';

describe('MyComp4664Component', () => {
  let component: MyComp4664Component;
  let fixture: ComponentFixture<MyComp4664Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4664Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4664Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
