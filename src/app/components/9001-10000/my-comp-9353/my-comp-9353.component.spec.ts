import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9353Component } from './my-comp-9353.component';

describe('MyComp9353Component', () => {
  let component: MyComp9353Component;
  let fixture: ComponentFixture<MyComp9353Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9353Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9353Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
