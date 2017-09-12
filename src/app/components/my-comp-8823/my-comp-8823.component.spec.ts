import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8823Component } from './my-comp-8823.component';

describe('MyComp8823Component', () => {
  let component: MyComp8823Component;
  let fixture: ComponentFixture<MyComp8823Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8823Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8823Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
