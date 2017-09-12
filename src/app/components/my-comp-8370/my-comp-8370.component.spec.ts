import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8370Component } from './my-comp-8370.component';

describe('MyComp8370Component', () => {
  let component: MyComp8370Component;
  let fixture: ComponentFixture<MyComp8370Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8370Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8370Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
