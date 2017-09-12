import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5726Component } from './my-comp-5726.component';

describe('MyComp5726Component', () => {
  let component: MyComp5726Component;
  let fixture: ComponentFixture<MyComp5726Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5726Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5726Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
