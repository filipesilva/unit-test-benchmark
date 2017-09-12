import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4926Component } from './my-comp-4926.component';

describe('MyComp4926Component', () => {
  let component: MyComp4926Component;
  let fixture: ComponentFixture<MyComp4926Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4926Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4926Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
