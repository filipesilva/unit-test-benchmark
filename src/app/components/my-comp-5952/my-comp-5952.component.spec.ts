import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5952Component } from './my-comp-5952.component';

describe('MyComp5952Component', () => {
  let component: MyComp5952Component;
  let fixture: ComponentFixture<MyComp5952Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5952Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5952Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
