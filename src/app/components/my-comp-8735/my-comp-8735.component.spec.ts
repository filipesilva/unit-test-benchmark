import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8735Component } from './my-comp-8735.component';

describe('MyComp8735Component', () => {
  let component: MyComp8735Component;
  let fixture: ComponentFixture<MyComp8735Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8735Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8735Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
