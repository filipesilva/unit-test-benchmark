import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5092Component } from './my-comp-5092.component';

describe('MyComp5092Component', () => {
  let component: MyComp5092Component;
  let fixture: ComponentFixture<MyComp5092Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5092Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5092Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
