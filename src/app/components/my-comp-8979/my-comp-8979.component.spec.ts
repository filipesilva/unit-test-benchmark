import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8979Component } from './my-comp-8979.component';

describe('MyComp8979Component', () => {
  let component: MyComp8979Component;
  let fixture: ComponentFixture<MyComp8979Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8979Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8979Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
