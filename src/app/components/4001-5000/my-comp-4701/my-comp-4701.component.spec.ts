import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4701Component } from './my-comp-4701.component';

describe('MyComp4701Component', () => {
  let component: MyComp4701Component;
  let fixture: ComponentFixture<MyComp4701Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4701Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4701Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
