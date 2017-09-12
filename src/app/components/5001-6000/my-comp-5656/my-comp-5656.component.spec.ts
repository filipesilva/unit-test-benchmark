import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5656Component } from './my-comp-5656.component';

describe('MyComp5656Component', () => {
  let component: MyComp5656Component;
  let fixture: ComponentFixture<MyComp5656Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5656Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5656Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
