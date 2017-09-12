import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp395Component } from './my-comp-395.component';

describe('MyComp395Component', () => {
  let component: MyComp395Component;
  let fixture: ComponentFixture<MyComp395Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp395Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp395Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
