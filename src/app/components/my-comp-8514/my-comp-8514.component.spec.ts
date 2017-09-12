import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8514Component } from './my-comp-8514.component';

describe('MyComp8514Component', () => {
  let component: MyComp8514Component;
  let fixture: ComponentFixture<MyComp8514Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8514Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8514Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
