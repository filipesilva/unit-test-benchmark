import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5503Component } from './my-comp-5503.component';

describe('MyComp5503Component', () => {
  let component: MyComp5503Component;
  let fixture: ComponentFixture<MyComp5503Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5503Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
