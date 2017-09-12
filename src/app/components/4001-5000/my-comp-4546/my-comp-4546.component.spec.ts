import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4546Component } from './my-comp-4546.component';

describe('MyComp4546Component', () => {
  let component: MyComp4546Component;
  let fixture: ComponentFixture<MyComp4546Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4546Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4546Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
