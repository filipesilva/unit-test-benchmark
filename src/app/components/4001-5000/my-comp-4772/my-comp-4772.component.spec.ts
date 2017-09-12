import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4772Component } from './my-comp-4772.component';

describe('MyComp4772Component', () => {
  let component: MyComp4772Component;
  let fixture: ComponentFixture<MyComp4772Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4772Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4772Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
