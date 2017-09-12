import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4148Component } from './my-comp-4148.component';

describe('MyComp4148Component', () => {
  let component: MyComp4148Component;
  let fixture: ComponentFixture<MyComp4148Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4148Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
