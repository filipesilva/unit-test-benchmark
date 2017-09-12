import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8159Component } from './my-comp-8159.component';

describe('MyComp8159Component', () => {
  let component: MyComp8159Component;
  let fixture: ComponentFixture<MyComp8159Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8159Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8159Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
