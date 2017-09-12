import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8949Component } from './my-comp-8949.component';

describe('MyComp8949Component', () => {
  let component: MyComp8949Component;
  let fixture: ComponentFixture<MyComp8949Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8949Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8949Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
