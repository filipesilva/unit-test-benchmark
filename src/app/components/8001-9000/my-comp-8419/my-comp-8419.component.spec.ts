import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8419Component } from './my-comp-8419.component';

describe('MyComp8419Component', () => {
  let component: MyComp8419Component;
  let fixture: ComponentFixture<MyComp8419Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8419Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8419Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
