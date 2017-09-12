import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4040Component } from './my-comp-4040.component';

describe('MyComp4040Component', () => {
  let component: MyComp4040Component;
  let fixture: ComponentFixture<MyComp4040Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4040Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4040Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
