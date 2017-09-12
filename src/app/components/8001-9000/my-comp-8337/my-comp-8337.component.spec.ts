import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8337Component } from './my-comp-8337.component';

describe('MyComp8337Component', () => {
  let component: MyComp8337Component;
  let fixture: ComponentFixture<MyComp8337Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8337Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8337Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
