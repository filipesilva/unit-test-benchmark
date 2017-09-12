import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8138Component } from './my-comp-8138.component';

describe('MyComp8138Component', () => {
  let component: MyComp8138Component;
  let fixture: ComponentFixture<MyComp8138Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8138Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
