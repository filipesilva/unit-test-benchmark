import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9591Component } from './my-comp-9591.component';

describe('MyComp9591Component', () => {
  let component: MyComp9591Component;
  let fixture: ComponentFixture<MyComp9591Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9591Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9591Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
