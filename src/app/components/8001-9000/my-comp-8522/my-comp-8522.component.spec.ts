import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8522Component } from './my-comp-8522.component';

describe('MyComp8522Component', () => {
  let component: MyComp8522Component;
  let fixture: ComponentFixture<MyComp8522Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8522Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8522Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
