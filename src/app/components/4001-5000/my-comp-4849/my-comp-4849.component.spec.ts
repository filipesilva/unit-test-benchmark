import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4849Component } from './my-comp-4849.component';

describe('MyComp4849Component', () => {
  let component: MyComp4849Component;
  let fixture: ComponentFixture<MyComp4849Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4849Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4849Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
