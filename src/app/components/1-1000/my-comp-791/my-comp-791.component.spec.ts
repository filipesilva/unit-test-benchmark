import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp791Component } from './my-comp-791.component';

describe('MyComp791Component', () => {
  let component: MyComp791Component;
  let fixture: ComponentFixture<MyComp791Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp791Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp791Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
