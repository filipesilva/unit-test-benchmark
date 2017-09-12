import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5821Component } from './my-comp-5821.component';

describe('MyComp5821Component', () => {
  let component: MyComp5821Component;
  let fixture: ComponentFixture<MyComp5821Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5821Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5821Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
