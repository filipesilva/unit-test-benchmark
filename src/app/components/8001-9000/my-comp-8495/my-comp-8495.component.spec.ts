import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8495Component } from './my-comp-8495.component';

describe('MyComp8495Component', () => {
  let component: MyComp8495Component;
  let fixture: ComponentFixture<MyComp8495Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8495Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8495Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
