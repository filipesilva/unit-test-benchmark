import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4198Component } from './my-comp-4198.component';

describe('MyComp4198Component', () => {
  let component: MyComp4198Component;
  let fixture: ComponentFixture<MyComp4198Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4198Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
