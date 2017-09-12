import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8044Component } from './my-comp-8044.component';

describe('MyComp8044Component', () => {
  let component: MyComp8044Component;
  let fixture: ComponentFixture<MyComp8044Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8044Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8044Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
