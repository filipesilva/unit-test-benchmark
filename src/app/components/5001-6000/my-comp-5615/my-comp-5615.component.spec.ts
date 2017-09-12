import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5615Component } from './my-comp-5615.component';

describe('MyComp5615Component', () => {
  let component: MyComp5615Component;
  let fixture: ComponentFixture<MyComp5615Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5615Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5615Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
