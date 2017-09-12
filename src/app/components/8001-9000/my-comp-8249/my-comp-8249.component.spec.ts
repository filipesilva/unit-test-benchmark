import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8249Component } from './my-comp-8249.component';

describe('MyComp8249Component', () => {
  let component: MyComp8249Component;
  let fixture: ComponentFixture<MyComp8249Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8249Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8249Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
