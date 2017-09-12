import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7299Component } from './my-comp-7299.component';

describe('MyComp7299Component', () => {
  let component: MyComp7299Component;
  let fixture: ComponentFixture<MyComp7299Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7299Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7299Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
