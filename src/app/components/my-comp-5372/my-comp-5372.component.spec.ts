import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5372Component } from './my-comp-5372.component';

describe('MyComp5372Component', () => {
  let component: MyComp5372Component;
  let fixture: ComponentFixture<MyComp5372Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5372Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5372Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
