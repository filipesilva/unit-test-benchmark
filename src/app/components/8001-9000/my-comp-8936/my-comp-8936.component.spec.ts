import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8936Component } from './my-comp-8936.component';

describe('MyComp8936Component', () => {
  let component: MyComp8936Component;
  let fixture: ComponentFixture<MyComp8936Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8936Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8936Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
