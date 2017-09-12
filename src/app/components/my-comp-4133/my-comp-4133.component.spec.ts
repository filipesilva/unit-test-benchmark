import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4133Component } from './my-comp-4133.component';

describe('MyComp4133Component', () => {
  let component: MyComp4133Component;
  let fixture: ComponentFixture<MyComp4133Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4133Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
