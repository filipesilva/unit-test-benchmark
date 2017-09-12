import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4316Component } from './my-comp-4316.component';

describe('MyComp4316Component', () => {
  let component: MyComp4316Component;
  let fixture: ComponentFixture<MyComp4316Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4316Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4316Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
