import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9300Component } from './my-comp-9300.component';

describe('MyComp9300Component', () => {
  let component: MyComp9300Component;
  let fixture: ComponentFixture<MyComp9300Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9300Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
