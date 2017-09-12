import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4395Component } from './my-comp-4395.component';

describe('MyComp4395Component', () => {
  let component: MyComp4395Component;
  let fixture: ComponentFixture<MyComp4395Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4395Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4395Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
