import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5779Component } from './my-comp-5779.component';

describe('MyComp5779Component', () => {
  let component: MyComp5779Component;
  let fixture: ComponentFixture<MyComp5779Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5779Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5779Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
