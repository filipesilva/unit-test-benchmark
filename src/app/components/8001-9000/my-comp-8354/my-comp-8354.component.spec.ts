import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8354Component } from './my-comp-8354.component';

describe('MyComp8354Component', () => {
  let component: MyComp8354Component;
  let fixture: ComponentFixture<MyComp8354Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8354Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8354Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
