import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9996Component } from './my-comp-9996.component';

describe('MyComp9996Component', () => {
  let component: MyComp9996Component;
  let fixture: ComponentFixture<MyComp9996Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9996Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9996Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
