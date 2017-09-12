import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5404Component } from './my-comp-5404.component';

describe('MyComp5404Component', () => {
  let component: MyComp5404Component;
  let fixture: ComponentFixture<MyComp5404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
