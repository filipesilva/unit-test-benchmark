import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8183Component } from './my-comp-8183.component';

describe('MyComp8183Component', () => {
  let component: MyComp8183Component;
  let fixture: ComponentFixture<MyComp8183Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8183Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8183Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
